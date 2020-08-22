import React, { Component } from 'react'
import intl from 'react-intl-universal';
import classes from '../Inventory.less'

const headerId=()=>(
    {
        title: intl.get('id'),
        dataIndex: 'id',
        key: 'id',
        align:'center',
    }
)

const headerProductCategory=()=>(
    {
        title: intl.get('productCategory'),
        dataIndex: 'category',
        key: 'category',
        align:'center',
        render: (text, row, index) => {
            console.log(text);
            return (
                <p>
                   {text.name}
                </p>
            )
        }
        
    }
)

const headerProductName=()=>(
    {
        title: () => (intl.get('productName')),
        dataIndex: 'productName',
        align:'center',
        key: 'productName',
        
    }
)


const headerProductCost=()=>(
    {
        title: () => (intl.get('productCost')),
        dataIndex: 'cost',
        align:'center',
        key: 'cost',
        
    }
)

const headerProductRemaining=()=>(
    {
        title: () => (intl.get('productRemaining')),
        dataIndex: 'remaining',
        align:'center',
        key: 'remaining',
        
    }
)

const headerProductStatus=()=>(
    {
        title: () => (intl.get('productStatus')),
        dataIndex: 'productStatus',
        key: 'productStatus',
        align:'center',
        render: (text, row, index) => {
             
            return (
                <div className={classes.circleContainer} >
                    <div className={classes.circle} />
                </div>
            )
        }
        
    }
)

const lastModifiedBy=()=>(
    {
        title: () => (intl.get('lastModifiedBy')),
        dataIndex: 'lastModifiedBy',
        align:'center',
        key: 'lastModifiedBy',
        
    }
)

const lastModifiedDate=()=>(
    {
        title: () => (intl.get('lastModifiedDate')),
        dataIndex: 'lastModifiedDate',
        align:'center',
        key: 'lastModifiedDate',
        
    }
)



export const GetHeader = (config) => {
     
    return (
        [
            headerId(),
            headerProductCategory(),
            headerProductName(),
            headerProductCost(),
            headerProductRemaining(),
            headerProductStatus(),
            lastModifiedBy(),
            lastModifiedDate(),
        ])

}

export const GetPreviewTableHeader = (config) => {
     
    return (
        [
            headerId(),
            headerProductCategory(),
            headerProductName(),
            headerProductRemaining(),
            headerProductStatus(),
        ])

}
