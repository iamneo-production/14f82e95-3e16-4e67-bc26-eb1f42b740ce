import { useState, useEffect } from 'react'

import './premium.css'
import {Link} from 'react-router-dom';
import { Card, CardMedia, Typography, CardContent } from '@mui/material'


export default function Silverpremium() {
    const [policy, setPolicy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/viewPolicy")

      .then(res => res.json())
      .then((result) => {
        setPolicy(result);
      }
      )
  }, [])
  return (
    <div>
        {policy.map(e => (
        <Card className='card1' >
          <CardMedia
            component="img"
            height="140"
            image='/images/comp_image.jpg'

          />
          <CardContent >

            <Typography gutterBottom variant="h5" component="div" key={e.id}>
              
              {e.brand}
            </Typography>
            <Typography variant="body1" color="text.secondary" key={e.id} className='con'>
              {e.details}

            </Typography>
            
          </CardContent>
          <Link to='/user/userDetails'>
          <button className='payButton'>Pay {e.amount}</button>
          </Link>
        </Card>))
      }
    </div>
  )
}
