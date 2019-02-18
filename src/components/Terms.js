import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './FooterBar';
import '../App.css';


class Terms extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <br />
        <h3>Terms</h3>
        <br />

        <p style={{fontSize: '17px', marginLeft: '121px', marginRight: '121px'}}>All reservations are subject to availability. Reservations made on this site are considered conditional until a
        confirmation number is given to the guest to substantiate the reservations by email or fax. The hotel may, from time to
        time, communicate with the guests, to re-confirm the reservations and to prevent any simulated bookings. Should the
        guests wish to amend any reservations, modifications may be made on the website at the earliest convenience. The
        Hotel will not be liable should it fail to provide its products and services due to unavailability.
        In the event that the hotel, for reasons beyond its control, need to reject or change a confirmed reservations it will use
        all reasonable attempt to facilitate the circumstances however if no alternative is provided to the client, the hotel will
        return any deposit made and considered it cancelled. This is the limit of the hotel&#39;s liability.
        The hotel reserves the right to impose a cancellation fee of per room per night in the event of a late cancellation
        notice or a no-show at the hotel.<br />
        Hotels at Basara does not guarantee acknowledgement of reservations or transactions made on this site arising from
        unforeseen circumstances, omissions or errors that may sometimes occur.<br /><br />
        <h5>Charges and Payment Terms</h5><br />
        Hotels at Basara reserves the right to charge a deposit, where applicable, on confirmation of a reservation. If the
        payment are not complied with, we hold the right to cancel the booking without liability and retain the deposit. Where
        a deposit is required, payment can be settled by major credit card or in the event where no credit card is available,
        settlement in cash is necessary to facilitate the booking procedures.  <br/><br/></p>
        <br />
        <Footer />
      </div>
    );
  }
}

export default Terms;