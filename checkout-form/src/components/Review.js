import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    image:<img src="https://images-na.ssl-images-amazon.com/images/I/71gUaaYXmjL.__AC_SX300_SY300_QL70_FMwebp_.jpg" height="200" width="100"></img>,
    name: 'Blue Buffalo Life Protection Formula Natural Adult Dry Dog Food',
    desc: 'Blue Buffalo foods always feature real meat as the first ingredient; High-quality protein from real chicken helps your dog build and maintain healthy muscle',
    price: '$23.99',
  },
  {
    image:<img src="https://images-na.ssl-images-amazon.com/images/I/51OQ4E2kvpL._SX300_SY300_QL70_FMwebp_.jpg" height="200" width="100"></img>,
    name: 'Detangling Brush, BRUSHZOO Hair Brush for Curly Hair, Hair Brushes for Women Men or Kids Curly Hair',
    desc: '1 Easy Detangling Brush; 1 Classic 9 Row Brush; 1 Wide Teeth Comb Brush. This is one of the best detangling brush set for curly hair.',
    price:'$3.45',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/81kygN6HwuL._AC_SX679_.jpg" height="200" width="100"></img>,
    name: 'XTERRA Fitness TR150 Folding Treadmill',
    desc: 'Large 16" x 50" walking/running surface accommodates users of many sizes and stride lengths',
    price: '$1,000,000.00',
  },
  {
    image:<img src="https://m.media-amazon.com/images/I/61i8Vjb17SL._FMwebp__.jpg" height="200" width="100"></img>,
    name: 'Apple iPhone 13 Pro Max (256GB, Sierra Blue) [Locked] + Carrier Subscription',
    desc: '[IPHONE OVER ANDROID] 6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel',
    price: '$15.00',
  },
  { name: 'Shipping', desc: '', price: '5.56' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr Adam A' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2064' },
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
            $1,000,042.44
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Adam Ahmad</Typography>
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