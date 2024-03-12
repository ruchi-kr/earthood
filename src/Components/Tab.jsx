import React from 'react'
import { Tabs } from 'antd'
import vectorarrow from '../Assets/Vectorarrow.png'
const Tab = () => {
    return (
        <>
            <Tabs>
                <Tabs.TabPane tab={
                    <div className='border-1 borderlightgreen rounded-2' style={{ width: '300px' }}>
                        <img src="" alt="icon" />
                        <p className='font14px textlightgreen text-capitalize'>Total Clients</p>
                        <div className='d-flex justify-content-around'>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p>
                            <div className='border-1 bordergreen rounded-4 d-flex '>
                                <img src={vectorarrow} alt="icon" />
                                <p className='font14px'>50</p>
                            </div>
                        </div>
                    </div>
                } key="1">
                    Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className='border-1 borderlightgreen rounded-2'>
                        <img src="" alt="icon" />
                        <p className='font14px textlightgreen text-capitalize text'>proposal under verification</p>
                        <div className='d-flex justify-content-between'>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p>
                            <div className='border-1 bordergreen rounded-4'>
                                <img src={vectorarrow} alt="icon" />
                                <p className='font14px'>50</p>
                            </div>
                        </div>
                    </div>
                } key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab={
                    <div className='border-1 borderlightgreen rounded-2'>
                        <img src="" alt="icon" />
                        <p className='font14px textlightgreen text-capitalize'>proposal under modification</p>
                        <div className='d-flex justify-content-between'>
                            <p className='textcolorblue' style={{ fontSize: '35px' }}>100</p>
                            <div className='border-1 bordergreen rounded-4'>
                                <img src={vectorarrow} alt="icon" />
                                <p className='font14px'>50</p>
                            </div>
                        </div>
                    </div>
                } key="3">
                    Content of Tab Pane 3
                </Tabs.TabPane>
                
            </Tabs>
        </>
    )
}

export default Tab
