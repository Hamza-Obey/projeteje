import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Button2() {
  return (
<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" style={{ marginLeft :'41%'}}> 
  <Button style={{color:"pink",borderColor:"pink"}}>Tous</Button>
  <Button style={{color:"pink",borderColor:"pink"}}>Present</Button>
  <Button style={{color:"pink",borderColor:"pink"}}>Abscent</Button>
</ButtonGroup>
  );
}
export default Button2 ;