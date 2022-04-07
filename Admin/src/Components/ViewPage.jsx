import { useState, useEffect } from 'react'
import './view.css'
import { Card, CardMedia, Typography, CardContent } from '@mui/material'

export default function ViewPage() {
  // const [heading, setHeading] = useState('');
  // const [content, setContent] = useState('');
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
            image='/image/comp_image.jpg'

          />
          <CardContent >

            <Typography gutterBottom variant="h5" component="div" key={e.id}>
              
              {e.brand}
            </Typography>
            <Typography variant="body1" color="text.secondary" key={e.id} className='con'>
              {e.details}

            </Typography>
            
          </CardContent>
          <button className='payButton'>Pay {e.amount}</button>
        </Card>))
      }
      

    {/* <Card  className='card1' >
      <CardMedia 
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      
    </Card> */}

    
   
    </div>
  )
}

