import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import './demo.scss'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'

const LayoutDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: '基础布局',
      title2: '分栏间隔',
      title3: 'Flex布局',
    },
    'zh-TW': {
      title1: '基礎佈局',
      title2: '分欄間隔',
      title3: 'Flex佈局',
    },
    'en-US': {
      title1: 'Basic layout',
      title2: 'Column interval',
      title3: 'Flex layout',
    },
    'id-ID': {
      title1: 'Tata letak dasar',
      title2: 'interval kolom',
      title3: 'Tata letak fleksibel',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''} full`}>
        <h2>{translated.title1}</h2>
        <div className="box-item">
          <Demo1 />
        </div>
        <h2>{translated.title2}</h2>
        <div className="box-item">
          <Demo2 />
        </div>
        <h2>{translated.title3}</h2>
        <div className="box-item">
          <Demo3 />
        </div>
      </div>
    </>
  )
}

export default LayoutDemo
