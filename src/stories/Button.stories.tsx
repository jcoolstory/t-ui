import type { Meta, StoryObj } from '@storybook/react';
import { isArgumentsObject } from 'util/types';
import Button from '../component/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: ({...args}) => {
    return (
      <div style={{
        width: 150,
        height: 50
      }}>
        <Button onClick={()=> {alert("hi")}} {...args}>Button</Button>
      </div>
    )
  }
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Sample1: Story = {
  render: () => {
    return (
      <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
       }}>
        <Button type="text" animate onClick={()=> {alert("hi");}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10}}>
            <div style={{width: 30, height: 30, borderRadius:"50%", backgroundColor:"#168ed9"}}></div>
            <div style={{display:"flex", flexDirection:"column", textAlign:"left", flex: 1}}>
              <div>예출금 통장</div>
              <div>500,000,000 원</div>
            </div>
            <div style={{width: 40, height:30, borderRadius:5, backgroundColor:"#EEE", display: "flex", alignItems:"center", justifyContent: "center"}}>송금</div>
          </div>
        </Button>
      </div>
  )
  }
};

