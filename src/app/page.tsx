import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss';
import Button from '@/ui/Button';
import AppBar from '@/ui/AppBar';
import Toolbar from '@/ui/Toolbar';
import Search from '@/ui/Search';
import Divider from '@/ui/Divider';
import Paper from '@/ui/Paper';
import Link from 'next/link';
import Input from '@/ui/elements/Input';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <AppBar style={{ position: 'absolute', top: '20px', boxShadow: 'none' }}>
        <Toolbar>
          <div style={{
            'padding': '1rem',
            'marginRight': '7.6rem',
          }}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <Search placeholder="Search..."></Search>
          </div>
          <Link href="/signin" style={{textDecoration: 'none'}}>
            <Button style={{ margin: 5 }} >เข้าสู่ระบบ</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <main className={styles.main} >
        <div className={styles.contenner}>
          <div className={styles.bar}></div>
          <div>
            <div className="tabs" style={{ boxShadow: 'none' }}>
            <Input type="radio" name="radio-tab-search" value="1" id="tab-1" defaultChecked />
              {/* <input type="radio" name="radio-tab-search" value="1" id="tab-1" defaultChecked /> */}
              <label htmlFor="tab-1" className="tabs__1">
                <p>ทั้งหมด</p></label>

              <input type="radio" name="radio-tab-search" value="2" id="tab-2" />
              <label htmlFor="tab-2" className="tabs__2">
                <p>ข่าวสาร</p></label>

              <input type="radio" name="radio-tab-search" value="3" id="tab-3" />
              <label htmlFor="tab-3" className="tabs__3">
                <p>ช็อปปิ้ง</p></label>

              {/* <input type="radio" name="radio-tab-search" value="4" id="tab-4" />
              <label htmlFor="tab-4" className="tabs__4">
                <p>การเงิน</p></label> */}

              {/* <input type="radio" name="radio-tab-search" value="5" id="tab-5" />
              <label htmlFor="tab-5" className="tabs__5">
                <p>การท่องเที่ยว</p></label> */}

              {/* <input type="radio" name="radio-tab-search" value="6" id="tab-6" />
              <label htmlFor="tab-6" className="tabs__6">
                <p>เทคโนโลยี</p></label> */}
              <div className="tabs__color"></div>
            </div>
          </div>
          <div className='box-search-list'>
            <span>ผลการค้นหาประมาณ 0 รายการ</span>
          </div>
          {/* <Divider></Divider> */}
          <div className='container-search-box'>
            <div className='box-content'>
              <Paper>
                <h1>Test</h1>
              </Paper>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
