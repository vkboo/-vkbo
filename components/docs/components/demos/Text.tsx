import React from 'react';
import { Row, Tag } from 'antd';
import { Text } from '@vkbo/components';

export default (props) => {
  return <>

    <Row>
      <div>undefined: </div>
      <Text>{undefined}</Text>
    </Row>

    <Row>
      <div>null: </div>
      <Text>{null}</Text>
    </Row>

    <Row>
      <div>'': </div>
      <Text>{''}</Text>
    </Row>

    <Row>
      <div>'1': </div>
      <Text>{'1'}</Text>
    </Row>

    <Row>
      <div>[]: </div>
      <Text>{[]}</Text>
    </Row>

    <Row>
      <div>[1,2,3]: </div>
      <Text>{[1, 2, 3]}</Text>
    </Row>

    <Row>
      <div>{'emptyConditions={[[]]} '}</div>
      <div>[]: </div>
      <Text emptyConditions={[[]]}>{[]}</Text>
    </Row>

    <Row>
      <div>{'emptyConditions={[[]]} '}</div>
      <div>undefined: </div>
      <Text emptyConditions={[[]]}>{undefined}</Text>
    </Row>

    <Row>
      <div>{'emptyConditions={[0]} '}</div>
      <div>0: </div>
      <span style={{ color: 'red' }}>
        <Text emptyConditions={[0]}>{0}</Text>
      </span>
    </Row>

    <Row>
      <Text>
        <span>1</span>
      </Text>
    </Row>
    <Row>
      <div>Custom emptyNode: </div>
      <Text emptyNode={<Tag color="blue">empty</Tag>}>
        {''}
      </Text>
    </Row>
  </>
};
