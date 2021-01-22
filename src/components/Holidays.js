import React from "react";
import { Table } from "antd";

const columns = [
    { title: 'DAY', dataIndex: 'day', key: 'day' },
    { title: 'DATE', dataIndex: 'date', key: 'date' },
    { title: 'HOLIDAY', dataIndex: 'holiday', key: 'holiday' },
];
const data = [
    { day: 'Tuesday', date: '	26 Jan, 2021', holiday: 'Republic Day' },
    { day: 'Friday', date: '	2 Apr, 2021', holiday: 'Good Friday' },
    { day: 'Wednesday', date: '	14 Apr, 2021', holiday: 'Ambedkar Jayanti' },
    { day: 'Wednesday', date: '	21 Apr, 2021', holiday: 'Rama Navmi' },
    { day: 'Friday', date: '	13 May, 2021', holiday: 'Eid al-Fitr' },
    { day: 'Wednesday', date: '	21 Jul, 2021', holiday: 'Eid al-Adha' },
    { day: 'Sunday', date: '	15 Aug, 2021', holiday: 'Independence Day' },
    { day: 'Friday', date: '	2 Oct, 2021', holiday: 'Gandhi Jayanti' },
    { day: 'Monday', date: '	19 Oct, 2021', holiday: "Prophet's Birthday" },
    { day: 'Thursday', date: '	4 Nov, 2021', holiday: 'Diwali' },
    { day: 'Saturday', date: '	25 Dec, 2021', holiday: 'Christmas Day' },
];
class Holidays extends React.Component {
    render() {
        return (
            <div className="site-layout-background"
                style={{
                    // margin: '24px 16px',
                    margin: '20px 40px',
                    padding: 24,
                    // minHeight: 280,
                    borderRadius: '8px'
                }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 450 }}
                    pagination={{
                        total: data.length,
                        pageSize: data.length,
                        hideOnSinglePage: true
                    }}

                ></Table>
            </div>
        )
    }
}
export default Holidays;