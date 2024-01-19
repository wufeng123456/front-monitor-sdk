import React, { useState } from 'react';
import { errorCaptcher } from 'front-monitor-sdk';

const Page2 = () => {
  const [show, setShow] = useState(false)
  // try catch主动捕获
  const handleErrorCaptcher = () => {
    try {
      const str = '11111'
      str.map()
    } catch (error) {
      errorCaptcher(error, error.message)
    }
  }
  // try catch无法捕获异步错误
  const handleAsyncErrorCaptcher = () => {
    try {
      setTimeout(() => {
        const str = '11111'
        str.map()
      }, )
    } catch (error) {
      errorCaptcher(error, error.message)
    }
  }
  // jsError
  const handleJsError = () => {
    const str = '11111'
    str = '22222'
  }
  // promiseError
  const handlePromiseError = () => {
    Promise.reject('promise出错了')
  }
  // resourceError
  const handleResourceError = () => {
    setShow(true)
  }
  return (
    <div>
      <h1>错误日志</h1>
      {/* 主动捕获 */}
      <button
        style={{ 'marginRight': '20px' }}
        onClick={handleErrorCaptcher}
      >
        主动捕获
      </button>
      {/* trycatch无法捕获异步错误 */}
      <button
        style={{ 'marginRight': '20px' }}
        onClick={handleAsyncErrorCaptcher}
      >
        异步错误
      </button>
      {/* jsError */}
      <button
        style={{ 'marginRight': '20px' }}
        onClick={handleJsError}
      >
        jsError
      </button>
      {/* promiseError */}
      <button
        onClick={handlePromiseError}
        style={{ 'marginRight': '20px' }}
      >
        promiseError
      </button>
      {/* 资源加载 */}
      <button onClick={handleResourceError}>
        resourceError
      </button>
      {
        show && <img src="localhost:8000/images/test.png" alt='' />
      }
    </div>
  )
};


export default Page2;
