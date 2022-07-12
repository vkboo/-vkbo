import React from 'react';
import { useMount, useUpdate } from 'ahooks';
import request from 'umi-request';
import { Spin, Row, Col, Space, Typography, Button } from 'antd';
import { useClientCacheState } from '@vkbo/hooks';

export default () => {
  const [cache, setCache] = useClientCacheState('transit-client-cache-key');
  const update = useUpdate();
  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <Space>
          <Typography.Text>cache:</Typography.Text>
          <Typography.Text>{JSON.stringify(cache)}</Typography.Text>
        </Space>
      </Col>
      <Col span={24}>
        <Space>
          <Typography.Text>setCache plain:</Typography.Text>
          <Button
            onClick={() => {
              setCache({ name: 'igloo', age: 3 });
            }}
          >
            setCache
          </Button>
        </Space>
      </Col>

      <Col span={24}>
        <Space>
          <Typography.Text>
            setCache function callback(expires: 2000ms):
          </Typography.Text>
          <Button
            onClick={() => {
              setCache(
                (prevState) => {
                  return {
                    ...prevState,
                    age: prevState?.age + 1,
                  };
                },
                {
                  expires: 2000,
                },
              );
            }}
          >
            setCache
          </Button>
        </Space>
      </Col>

      <Col span={24}>
        <Button onClick={update}>Update</Button>
      </Col>
    </Row>
  );
};
