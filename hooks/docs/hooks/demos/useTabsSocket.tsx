import React, { useState } from 'react';
import { Row, Col, Space, Button, Input } from 'antd';
import { useControllableValue } from 'ahooks';
import { useTabsSocket } from '@vkbo/hooks';

export default (props) => {
  const [state, setState] = useControllableValue<string>(props, {
    defaultValue: '',
  });
  const [data, setData] = useTabsSocket('key-uuid');
  const onSendData = () => {
    setData(state);
  };
  const onOpen = () => {
    window.open(location.href);
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Button onClick={onOpen}>Open New Tab</Button>
      </Col>
      <Col span={24}>
        <Space>
          <Input value={state} onChange={(e) => setState(e.target.value)} />
          <Button onClick={onSendData}>Send Data</Button>
        </Space>
      </Col>
      <Col span={24}>Message from other tab: {JSON.stringify(data)}</Col>
    </Row>
  );
};
