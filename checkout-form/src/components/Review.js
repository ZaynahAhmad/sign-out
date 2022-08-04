import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    image:<img src="https://images-na.ssl-images-amazon.com/images/I/71gUaaYXmjL.__AC_SX300_SY300_QL70_FMwebp_.jpg" height="150" width="100"></img>,
    name: 'Blue Buffalo Life Protection Formula Natural Adult Dry Dog Food',
    desc: 'Blue Buffalo foods always feature real meat as the first ingredient; High-quality protein from real chicken helps your dog build and maintain healthy muscle',
    price: '$23.99',
  },
  {
    image:<img src="https://images-na.ssl-images-amazon.com/images/I/51OQ4E2kvpL._SX300_SY300_QL70_FMwebp_.jpg" height="150" width="100"></img>,
    name: 'Detangling Brush, BRUSHZOO Hair Brush for Curly Hair, Hair Brushes for Women Men or Kids Curly Hair',
    desc: '1 Easy Detangling Brush; 1 Classic 9 Row Brush; 1 Wide Teeth Comb Brush. This is one of the best detangling brush set for curly hair.',
    price:'$3.45',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/81kygN6HwuL._AC_SX679_.jpg" height="150" width="100"></img>,
    name: 'XTERRA Fitness TR150 Folding Treadmill',
    desc: 'Large 16" x 50" walking/running surface accommodates users of many sizes and stride lengths',
    price: '$1,000,000.00',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/61i8Vjb17SL._FMwebp__.jpg" height="150" width="100"></img>,
    name: 'Apple iPhone 13 Pro Max (256GB, Sierra Blue) [Locked] + Carrier Subscription',
    desc: '[IPHONE OVER ANDROID] 6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel',
    price: '$15.00',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/81b8Dr-WCdL._AC_SX679_.jpg" height="150" width="100"></img>,
    name: 'Ninja AMZ493BRN Compact Kitchen System, 1200W, 3 Functions for Smoothies, Dough & Frozen Drinks with Auto-IQ, 72-oz.',
    desc: 'POWERFUL CRUSHING: Stacked Blade Assembly and high-performance Pro Extractor Blades Assembly powers through frozen ingredients and ice with ease.',
    price: '60.00',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/81vwyX2Wu8L._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg" height="150" width="100"></img>,
    name: 'Mrs. Meyers Hand Soap, Made With Essential Oils, Biodegradable Formula, Lemon Verbena, 12.5 FL. Oz - Pack Of 3',
    desc: 'Hardworking Lemon Verbena scented soap for busy hands',
    price: '$14.00',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/61okwCPlN6L._AC_SX679_.jpg" height="150" width="100"></img>,
    name: 'X-TIGER Polarized Sports Sunglasses with 3 or 5 Interchangeable Lenses,Mens Womens Cycling Glasses,Baseball Running Fishing Golf Driving Sunglasses',
    desc: 'Lightweight Design】-Ultralight Frame Weight only 19.2g. you will forget you are wearing them in the middle of an adventure',
    price: '$26.00',
  },
  { name: 'Shipping', desc: '', price: '5.56' },
];

const addresses = ['250 Service Rd, Spring City, PA 19475,'];
const payments = [
  { name: 'Card type', detail: 'Mastercard' },
  { name: 'Card holder', detail: 'Mrs Angel A' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '08/2064' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            {product.image}
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $1,000,142.44
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Angel Ahmad</Typography>
          <Typography gutterBottom>{addresses.join(',e ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}