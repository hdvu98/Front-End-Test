import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './styles.scss';

class CustomTable extends Component {
  renderTableHeader() {
    return this.props.columns.map((col, index) => {
      const {position = 'left'} = col;
      return <th key={`header_${col.key}`} 
                className={`aligin_${position}`} 
                style={col.width && {width: col.width}}>
                {col.name}
              </th>
    })
  }
  renderTableData() {
    const { data, columns } = this.props;
    const keys = columns.map(item => item.key)
    return data.map((row, index) => {
      return (
        <tr key={row.id}>
          {
            keys.map((key, keyIndex) => {
              const {position = 'left', width} = columns[keyIndex];
              if (columns[keyIndex].render && typeof (columns[keyIndex].render) === 'function') {
                return (
                <td className={`aligin_${position}`} 
                  style={width && {width: width}}>
                  {columns[keyIndex].render(row[key], row)}
                </td>
                )
              }
              if (row[key] !== undefined) {
                return (
                <td className={`aligin_${position}` } style={width && {width: width}}>
                  <div>{row[key]}</div>
                </td>
                )
              }
            })
          }
        </tr>
      )
    })
  }
  render() {
    const { header, onCreate } = this.props
    return (
      <div className="custom-table">
        <div className="header-wrapper">
          <div className="header">{header}</div>
          {
            onCreate && <div ><button className="create-btn" onClick={onCreate}><i className="fa fa-plus"></i> Create</button></div>
          }
        </div>
        
        <Table responsive="xl">
          <thead>
            <tr className="table-header">
              {
                this.renderTableHeader()
              }
            </tr>
          </thead>
          <tbody className="table-wrapper">
            {
              this.renderTableData()
            }

          </tbody>
        </Table>
      </div>
    )
  }
}

export default CustomTable;