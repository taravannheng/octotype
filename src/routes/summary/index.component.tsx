import { FC } from 'react'

import Dashboard from "../../components/dashboard/index.component";
import Header from '../../components/header/index.component';

interface SummaryProps {
  summaryPageStyle?: string;
}

const Summary: FC<SummaryProps> = ({ summaryPageStyle = '' }) => {
  return (
    <div className={`summary ${summaryPageStyle}`}>
      <Header headerStyle="mb-24" />
      <h1 className='text-h1 flex justify-center items-center mb-16 text-neutral-light'>Your Stats</h1>
      <Dashboard dashboardStyle="flex justify-center items-center flex-row px-12 sm:px-24 lg:px-64 mb-12" />
    </div>
  )
}

export default Summary