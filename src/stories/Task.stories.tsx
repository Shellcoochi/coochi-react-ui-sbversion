import React from 'react';
import { ComponentStory,ComponentMeta } from '@storybook/react';

import { Task } from '../components/Task';
import '../styles/task.less';

export default {
  component: Task,
  title: 'COOCHI-UI/Task',
};

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = () => <Task/>;
Default.storyName ='默认'

// export const Primary = <Task title='Primary'/>;
export const Primary = Template.bind({});
Primary.args={
    primary: true,
    title:'Primary!!'
}

export const Secondary = Template.bind({});
Secondary.args={
    title:'Secondary!!',
}