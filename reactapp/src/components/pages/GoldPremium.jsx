import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

import './premium.css'
import { Card, CardMedia, Typography, CardContent } from '@mui/material'


export default function GoldPremium() {
    const [policy, setPolicy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/admin/viewPolicy")

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
          <button className='payButton'>Pay {e.gamount}</button>
          </Link>
        </Card>))
      }
    </div>
  )
}
