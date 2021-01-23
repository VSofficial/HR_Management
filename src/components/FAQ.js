import React from "react";
import { Typography, Collapse } from 'antd';
const { Title, Text } = Typography;
const { Panel } = Collapse;

class FAQ extends React.Component {
    render() {
        return (
            <div className="site-layout-background"
                style={{
                    // margin: '24px 16px',
                    margin: '20px 40px',
                    padding: 24,
                    minHeight: '100%',
                    borderRadius: '8px'
                }}>
                <Title underline level={3}>FAQ's</Title>
                <div style={{ marginBottom: '20px' }}>
                    <Text>Here are the frequently asked questions about the company and you should look up before you ask in the community or create a new issue. We also maintain a FAQ issues label for common github issues.</Text>
                </div>

                <Collapse accordion>
                    <Panel header="How long is the training priod of the Company ?" key="1">
                        <p>You will hold yourself in readiness for any training at ant place whenever required. Such training would be imparted to you at the Company's expense. <br></br> The training preiod may range from 2-5 months depending upon the role.</p>
                    </Panel>
                    <Panel header="How is the work culture of the Company ?" key="2">
                        <p>There is nothing better than working in a company with a great company culture. Having a positive work culture reflects positively on employee retention and financial goals of your company.<br></br>It is worth the investment for companies to build and nourish their culture. As an employer or a leader, you would want happy employees because happiness means more productivity and this would lead to better monthly sales for the company.</p>
                    </Panel>
                    <Panel header="What is the prohibition period of the company ?" key="6">
                        <p>For the <b>first 6 months </b>from the actual date of appointment you will be deemed to be on probation and
                        during this period either party may terminate this agreement by giving <b>15 days’ </b>notice in writing or
                        salary in lieu thereof. On completion of the said 6 months, you will be advised by your manager in
                        writing if your performance does not meet company’s standards and you will be advised on further
                        action. In case of no such notice received for 2 weeks after confirmation due date, your probation will
                        be deemed to have been successfully completed.</p>
                    </Panel>
                    <Panel header="What are the criteria for Appraisals ?" key="3">
                        <p>The Company also has a policy of half- yearly performance appraisal. You may be eligible for a salary
                        appraisal under this policy based on your individual ratings as well as the performance of the team
                        and the performance of the company for the fiscal year. Performance reviews take place in the
                        months of March and September and the revised salaries get affected in the months of April and
                            October.</p>
                    </Panel>
                    <Panel header="Number of leaves an employee can take ?" key="4">
                        <p>You are entitled to <b>10 Casual / Sick leaves</b> and <b>20 Privileged / paid leaves</b> every year. The leaves will
                        be credited to your leave balance <b>@ 0.7 Casual and 1.75 Privileged leaves per month</b>. The eligibility for
                        the paid leaves will be on completion of 6 months. You are also eligible for <b>15 paid Holidays</b> every year
                        including the government mandated holidays. The Company follows strict time schedule and late
                        comings are discouraged, unless otherwise notified by you in advance.   </p>
                    </Panel>
                    <Panel header="The company works in how many shifts ?" key="5">
                        <p>The normal working hours of the Company are from <b>9:00 AM- 5:30 PM </b>from Monday to Friday
                        including lunch break and tea breaks. As the Company works <b>24/5 </b> and depending on organizational
                        requirement or project contingencies, working hours and days for specific employees or groups of
                        employees or all employee may be modified / altered from time to time which will be communicated to
                        you by your Manager. Further, you should be prepared to work on any shift, as may be warranted by
                        the Company’s work requirements.<br />
                            <b><u>Standard Shift Schedule:</u><br />
                        First Shift : 06:30 AM – 03:30 PM<br />
                        General Shift :09:30 AM – 06:30 PM<br />
                        Second Shift : 04:00 PM – 1:00 AM<br />
                        Third Shift : 01:00 AM – 09:00 AM</b></p>
                    </Panel>

                </Collapse>
            </div>
        )
    }
}
export default FAQ;