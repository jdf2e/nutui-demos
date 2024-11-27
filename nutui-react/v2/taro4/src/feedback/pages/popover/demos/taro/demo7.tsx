import React, { useState } from 'react'
import { Popover, Table } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [customized, setCustomized] = useState(false)
  const itemList = [
    {
      key: 'key1',
      name: '大学',
    }
  ]
  const [columns] = useState([
    {
      title: 'ID',
      key: 'id',
      render: (_record: any, index) => {
        return index + 1
      },
    },
    {
      title: '姓名',
      key: 'name',
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
      render: (record: any) => {
        return (
          <span id='test' style={{display:'flex'}}
            onClick={()=>{
              customized?setCustomized(false): setCustomized(true)
            }}
          >
            {record.record}
          </span>
        )
      },
    },
  ])

  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '点击查看',
    },
  ])
  return (
    <>
      <Popover
        visible={customized}
        onClick={() => {
          customized ? setCustomized(false) : setCustomized(true)
        }}
        location="left"
        list={itemList}
        targetId='test'
      >
      </Popover>
      <Table columns={columns} data={data}/>
    </>
  )
}

export default Demo7
