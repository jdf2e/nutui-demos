import './index.scss'
import {Jd} from '@nutui/icons-react-taro'
import {Cell, Toast} from '@nutui/nutui-react-taro'

const Index = () => {

    return (
        <>
            <Toast id="test" />
            <Cell
                title="函数调用"
                onClick={() => {
                    Toast.show('test', {
                        title: '函数调用函数调用',
                        content: '函数调用函数调用函数调用函数调用函数',
                        type: 'fail',
                        duration: 2,
                        position: 'center',
                        icon: <Jd color="#ffffff"/>,
                        lockScroll: true,
                        onClose: () => {
                            console.log('close')
                        },
                    })
                }}
            />
        </>

    )
}

export default Index
