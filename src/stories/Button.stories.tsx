import type { Meta, StoryObj } from '@storybook/react';
import Button from '../component/Button';
import ButtonBox from '../component/Button/ButtonBox';
import IconButton from '../component/Button/IconButton';
import {ReactComponent as CreditCardIcon} from './assets/credit-card.svg';
import {ReactComponent as BackIcon} from './assets/bank.svg';
import {ReactComponent as MoneyBagIcon} from './assets/money-bag.svg';
import {ReactComponent as LoanIcon} from './assets/mortgage-loan.svg';
import {ReactComponent as ArrowNextIcon} from './assets/arrow-next.svg';

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
type StoryButton = StoryObj<typeof Button>;
type StoryButtonBox = StoryObj<typeof ButtonBox>;
type StoryIconButton = StoryObj<typeof IconButton>;

export const ButtonComponent: StoryButton = {
  render: ({...args}) => {
    return (
      <div style={{
        width: 150,
        height: 50
      }}>
        <Button onClick={()=> {alert("hi");}} {...args}>Button</Button>
      </div>
    )
  }
};

export const ButtonBoxComponent: StoryButtonBox = {
  render: ({...args}) => {
    return (
      <ButtonBox onClick={()=> {alert("hi");}} {...args}>
        <div style={{width: 120, height: 180}}>Content</div>
      </ButtonBox>
    )
  }
};


export const SampleButton: StoryButton = {
  render: () => {
    return (
      <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
       }}>
        <Button type="text" animate ripple onClick={()=> {alert("hi");}}>
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

export const SampleIconButton: StoryIconButton = {
  render: ({...args}) => {
    return (
      <div>
        <IconButton width={400} height={60} {...args}>
          <CreditCardIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
        </IconButton>

        <IconButton width={400} height={60} {...args}>
          <BackIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
          <ArrowNextIcon width="20" height="20" fill="#eee"/>
        </IconButton>

        <IconButton width={400} height={60} {...args}>
          <MoneyBagIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
          <ArrowNextIcon width="20" height="20" fill="#eee"/>
        </IconButton>

        <IconButton width={400} height={60} {...args}>
          <LoanIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
          <ArrowNextIcon width="20" height="20" fill="#eee"/>
        </IconButton>
      </div>
    )
  }
}
