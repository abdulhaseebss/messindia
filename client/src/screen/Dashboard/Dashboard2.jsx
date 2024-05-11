

import Dashboard_Form from '../../components/Dashboard_Form'
import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'

const Dashboard2 = () => {
  return (
    <div>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1 p-4 min-h-0 overflow-auto bg-[#FFFEF9]">
           <Dashboard_Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard2