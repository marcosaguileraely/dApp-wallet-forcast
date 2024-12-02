import { useState } from 'react';
import { Button } from '@nextui-org/button'

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>WalletCast - Decentralized App</h3>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default Landing;
