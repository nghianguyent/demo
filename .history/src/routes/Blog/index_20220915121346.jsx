import { Space, Table, Tag, Tabs } from 'antd';

import * as Styled from './Blog.styled';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href="/blog">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';

                    if (tag === 'loser') {
                        color = 'volcano';
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a href="/blog">Invite {record.name}</a>
                <a href="/blog">Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Blog = () => {
    return (
        <Styled.Background>
            <Styled.Wrapper>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Tab 1" key="1">
                        <Table columns={columns} dataSource={data} />;
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
            </Styled.Wrapper>
        </Styled.Background>
    );
};

Blog.propTypes = {};

export default Blog;