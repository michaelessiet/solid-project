import { JSX } from 'solid-js/jsx-runtime';
import { store, storeUsingSignal } from './store';

const CompB = () => {
  return (
    <div style={styles.headline}>
      <h2>From B: {store.count}</h2>
    </div>
  )
}

const styles:StyleObj = {
  button:{
    background:'rgb(12, 180, 129)'
  },
  headline:{
    color:'rgb(12, 180, 129)'
  }
}

interface StyleObj {
  [Key:string]: JSX.CSSProperties
}

export default CompB;