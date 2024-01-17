import type { Meta, StoryObj } from '@storybook/react';
import Button from '../component/Button';
import ButtonBox from '../component/Button/ButtonBox';
import ListItemButton from '../component/Button/ListItemButton';
import {ReactComponent as CreditCardIcon} from './assets/credit-card.svg';
import {ReactComponent as BackIcon} from './assets/bank.svg';
import {ReactComponent as MoneyBagIcon} from './assets/money-bag.svg';
import {ReactComponent as LoanIcon} from './assets/mortgage-loan.svg';
import {ReactComponent as ArrowNextIcon} from './assets/arrow-next.svg';
import {ReactComponent as BarChartIcon} from './assets/Chart_light.svg';
import {ReactComponent as DateIcon} from './assets/Date_range_light.svg';
import {ReactComponent as LineChartIcon} from './assets/Line_up.svg';
import {ReactComponent as SendIcon} from './assets/Send_fill.svg';
import {ReactComponent as StartIcon} from './assets/Star_light.svg';
import IconButton from '../component/Button/IconButton';

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
type StoryListItemButton = StoryObj<typeof ListItemButton>;

export const ButtonComponent: StoryButton = {
  render: ({...args}) => {
    return (
       <Button width={130} height={40} {...args}>Button</Button>
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

export const StoryIconButton: StoryIconButton = {
  render: ({...args}) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <div style={{display: 'flex', gap: 10}}>
          <IconButton width={24} height={24} icon={BarChartIcon} animate ripple />
          <IconButton icon={DateIcon} animate ripple />
          <IconButton icon={LineChartIcon} animate ripple />
          <IconButton icon={SendIcon} animate ripple />
          <IconButton icon={StartIcon} animate ripple />
        </div>
        <div style={{display: 'flex', gap: 10}}>
          <IconButton width={20} height={20} gap={10} style={{color: '#000'}} icon={LineChartIcon} animate ripple >Line Chart</IconButton>
          <IconButton style={{color: '#000'}} icon={SendIcon} animate ripple >Send</IconButton>
          <IconButton style={{color: '#000'}} icon={StartIcon} animate ripple >Start</IconButton>
        </div>
      </div>
    )
  }
};

export const SampleButton: StoryButtonBox = {
  render: () => {
    return (
      <ButtonBox type="text" animate ripple onClick={()=> {alert("hi");}} style={{padding: '10px 20px'}}>
        <div style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
       }}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10}}>
            <div style={{width: 30, height: 30, borderRadius:"50%", backgroundColor:"#168ed9"}}></div>
            <div style={{display:"flex", flexDirection:"column", textAlign:"left", flex: 1}}>
              <div>예출금 통장</div>
              <div>500,000,000 원</div>
            </div>
            <div style={{width: 40, height:30, borderRadius:5, backgroundColor:"#EEE", display: "flex", alignItems:"center", justifyContent: "center"}}>송금</div>
          </div>
        </div>
      </ButtonBox>
  )
  }
};

export const SampleListItemButton: StoryListItemButton = {
  render: ({...args}) => {
    return (
      <div>
        <ListItemButton width={400} height={60} {...args}>
          <CreditCardIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
        </ListItemButton>

        <ListItemButton width={400} height={60} {...args}>
          <BackIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
          <ArrowNextIcon width="20" height="20" fill="#eee"/>
        </ListItemButton>

        <ListItemButton width={400} height={60} {...args}>
          <MoneyBagIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
          <ArrowNextIcon width="20" height="20" fill="#eee"/>
        </ListItemButton>

        <ListItemButton width={400} height={60} {...args}>
          <LoanIcon width="30" height="30"/>
          <p style={{width: 100}}>Text Area</p>
          <ArrowNextIcon width="20" height="20" fill="#eee"/>
        </ListItemButton>
      </div>
    )
  }
}
