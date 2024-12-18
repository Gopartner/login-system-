import React, { useEffect, useState } from 'react';
import { db } from '@f/firebaseConfig';
import { ref, set, onValue } from 'firebase/database';
import MapComponent from './MapComponent';
import LocationInput from './LocationInput';
import ChatWindow from '@c/chat/ChatWindow';
import SendMessageForm from '@c/chat/SendMessageForm';

const RideRequest = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [pickupCoords, setPickupCoords] = useState([-6.200001, 106.816666]);
  const [destinationCoords, setDestinationCoords] = useState([-6.250001, 106.810000]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(db, 'messages/');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages(Object.values(data));
      }
    });
  }, []);

  const sendMessage = (text) => {
    const newMessage = { senderId: 'passenger', text };
    const messagesRef = ref(db, 'messages/' + Date.now());
    set(messages Ref, messagesRef, newMessage);
    // Optionally, you can also send the message to the driver here
  };

  return (
    <div className="ride-request">
      <h2>Ride Request</h2>
      <MapComponent pickupCoords={pickupCoords} destinationCoords={destinationCoords} />
      <LocationInput 
        pickupLocation={pickupLocation} 
        setPickupLocation={setPickupLocation} 
        destinationLocation={destinationLocation} 
        setDestinationLocation={setDestinationLocation} 
      />
      <ChatWindow messages={messages} />
      <SendMessageForm sendMessage={sendMessage} />
    </div>
  );
};

export default RideRequest;
