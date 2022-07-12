import React from 'react';
import request from 'umi-request';
import { Spin, Row, Col, Space, Typography, Button } from 'antd';
import { useServerCacheState } from '@vkbo/hooks';

const config = {
  ORDER_ID: 'order1655780294883',
  API_BASE_URL: 'https://api.staging.iglooinsure.com',
  TOKEN:
    'd43ea7d2bc6c5f043433331f12df72d0c0eeb8303914f3eec7f1b73b3863985d387464909c1e64c0fb8005bc92bc7e396c1f490c80ffc90fb2c1a8c28f31fb08826caa584a892227f8dec4c0c7d8930f1522baa3caba28ad327658fe27d713e0ac3c88',
};

const commonHeaders = {
  'x-Axinan-Key': config.ORDER_ID,
  'x-Axinan-User-Token': config.TOKEN,
};

export default () => {
  const getCache = () =>
    request.get(
      `${config.API_BASE_URL}/v1/transit-etmall/customer/claims/cache`,
      {
        params: {
          order_id: config.ORDER_ID,
        },
        headers: { ...commonHeaders },
      },
    );

  const setCache = (values: any) =>
    request.post(
      `${config.API_BASE_URL}/v1/transit-etmall/customer/claims/cache`,
      {
        data: {
          data: values,
          order_id: config.ORDER_ID,
        },
        headers: { ...commonHeaders },
      },
    );
  const [data, setData, { loading, refresh, loadingSet }] = useServerCacheState(
    {
      defaultValue: { name: 'init' },
      manual: true,
      serviceToSet: setCache,
      serviceToGet: getCache,
    },
  );

  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <Spin spinning={loading}>
          <Space>
            <Typography.Text>data:</Typography.Text>
            <Typography.Text>{JSON.stringify(data)}</Typography.Text>
          </Space>
        </Spin>
      </Col>

      <Col span={24}>
        <Spin spinning={loadingSet}>loadingSet</Spin>
      </Col>

      <Col span={24}>
        <Space>
          <Typography.Text>setData</Typography.Text>
          <Button
            onClick={() => {
              setData({ name: 'setData' });
            }}
          >
            setData
          </Button>
        </Space>
      </Col>

      <Col span={24}>
        <Space>
          <Typography.Text>refresh</Typography.Text>
          <Button onClick={refresh}>refresh</Button>
        </Space>
      </Col>
    </Row>
  );
};
