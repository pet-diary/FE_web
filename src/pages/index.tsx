import React from 'react'
import { useRecoilState } from 'recoil'
import { exState } from '~/recoil/exState'

// import { useQuery } from 'react-query'
// import { exApi } from '~/services/ex'

function Home() {
  // useQuery('slotList', () => exApi(), {
  //   onSuccess: (data) => {
  //     console.log(data)
  //   }
  // })
  const [sth, setSth] = useRecoilState(exState)
  console.log(sth, setSth)
  return (
    <div>
      <span>hello</span>
    </div>
  )
}

export default Home
