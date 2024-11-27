import React, { useState } from 'react'
import { Table } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'

interface TableColumnProps {
  key: string
  title?: string
  align?: string
  sorter?: ((a: any, b: any) => number) | boolean | string
  render?: (rowData: any, rowIndex: number) => string | React.ReactNode
  fixed?: 'left' | 'right'
  width?: number
}
const Demo9 = () => {
  const [data] = useState([
    {
      name: 'Tom',
      gender: '男',
      record: '小学',
      age: 10,
    },
    {
      name: 'Lucy',
      gender: '女',
      record: '本科',
      age: 30,
    },
    {
      name: 'Jack',
      gender: '男',
      record: '高中',
      age: 4,
    },
  ])

  const [columns] = useState<Array<TableColumnProps>>([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true,
    },
    {
      title: '性别',
      key: 'gender',
    },
    {
      title: '学历',
      key: 'record',
    },
    {
      title: '年龄',
      key: 'age',
      sorter: (row1: any, row2: any) => {
        return row1.age - row2.age
      },
    },
  ])

  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    Taro.showToast({ title: `${JSON.stringify(item)}` })
  }

  return (
    <Table
      columns={columns}
      data={data}
      onSort={handleSorter}
      style={{ background: '#fff' }}
    />
  )
}
export default Demo9