import React, { useEffect, useState } from 'react'
import './UserDetails.css'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Button, } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function UserDetails() {
  const [address, setAddress] = useState("");
  // const [mobile, setMobile] = useState();
  // const [pincode, setPincode] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (address && card && cvv) {
      setLoading(true);
    } else {
      toast.error("Please fill all the details", toastStyle);
    }
  }

  useEffect(() => {
    const slider = setInterval(() => {
      setLoading(false);
      if (address && card && cvv) {
        navigate('/orderplaced');
      }
    }, 5000);

    return () => {
      clearInterval(slider);
    }
  }, [handleClick]);


  const toastStyle = {
    position: "top-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }
  return (
    <div className='ud'>
      <div className="ud-container">
        <p className='ud-title'>User Details</p>
        <Input placeholder='Full Name' size='lg'
          paddingLeft={'1rem'}
          marginBottom={'1rem'}
        />
        <Input placeholder='Address' size='lg'
          onChange={(e) => setAddress(e.target.value)}
          paddingLeft={'1rem'}
          marginBottom={'1rem'}
        />
        {/* <Input placeholder='State' size='lg'
          paddingLeft={'1rem'}
          marginBottom={'1rem'}
        /> */}
        <div
          style={{
            display: 'flex',
            // justifyContent:'center',
            // alignItems:'center',
            gap: '1rem'
          }}
        >
          {/* <InputGroup size={'lg'}>
            <InputLeftElement
              pointerEvents='none'
              children={<LocalPhoneIcon color='gray.300' />}
            />
            <Input
              onChange={(e) => setMobile(e.target.value)}
              type='tel' placeholder='Phone number' 
              size={'lg'}
              marginBottom={'1rem'}
              // width={'100%'}
            />
          </InputGroup> */}
          {/* <Input
            onChange={(e) => setPincode(e.target.value)}
            placeholder='pin-code' size='lg'
            paddingLeft={'1rem'}
            marginBottom={'1rem'}
          /> */}
        </div>
        {/* cc == credit card or debit card etc */}
        <div className='cc-details'>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<CreditCardIcon color='gray.300' />}
            />
            <Input
              onChange={(e) => setCard(e.target.value)}
              type='tel' placeholder='Card number' size={'lg'}
            />
            <Input
              onChange={(e) => setCvv(e.target.value)}
              placeholder='cvv' size='lg'
              paddingLeft={'1rem'}
              marginBottom={'1rem'}
            />
          </InputGroup>
        </div>

        <Button
          isLoading={loading}
          loadingText='Submitting'
          colorScheme='teal'
          // variant='outline'
          onClick={handleClick}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default UserDetails