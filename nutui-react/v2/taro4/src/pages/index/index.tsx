import Taro from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import pkg from './config.json'
import './index.scss'
import { useRef } from 'react'
// import Schema from 'async-validator'

const navs = pkg.nav
// console.log(navs)

// try {
//     console.log('xxx', Schema)
// } catch (e) {}
const Index = () => {
  const gotoNext = (name: string, enName: string) => {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: `/${enName}/pages/${name.toLocaleLowerCase()}/index`,
    })
  }

  const onShareAppMessage = (res) => {
    return {
      title: 'NutUI React 小程序',
      path: 'pages/index/index',
    }
  }

  const onShareTimeline = () => {
    console.log('onShareTimeline')
    return {
      title: 'NutUI React 小程序',
      path: 'pages/index/index',
    }
  }
  const a = useRef(0)
  return (
    <ScrollView className='index'>
      <View className='index-header'>
        <Image
          className='index-header-img'
          src='https://img14.360buyimg.com/imagetools/jfs/t1/117879/25/28831/6279/6329723bE66715a2f/5f099b8feca9e8cc.png'
        />
        <View className='index-header-info'>
          <View className='index-header-info-h1'>NutUI React</View>
          <View className='index-header-info-p'>
            京东风格的轻量级小程序组件库 React 版
          </View>
          <View className='index-header-info-p'>
          </View>
        </View>
      </View>
      <View className='index-components'>
        {navs.map((nav) => (
          <View key={nav.enName} className='index-components-item'>
            {nav.enName === 'dataentry' ? null : (
              <View className='index-components-item-title'>{nav.name}</View>
            )}
            <View className='index-components-sublist'>
              {nav.packages.map((com) => {
                if(com.show && com.taro) {
                  return <View
                  key={com.name}
                  className='index-components-sublist-item'
                >
                  <View
                    className='index-components-sublist-item-content'
                    key={com.name}
                    onClick={() => gotoNext(com.name, nav.enName)}
                  >
                    {com.name}
                  </View>
                </View>
                }
                return null
              }
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default Index
