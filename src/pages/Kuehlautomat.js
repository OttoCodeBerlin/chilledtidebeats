import React from 'react'
import KAB_1955 from '../images/KAB_1955.jpeg'
import Dog1 from '../images/German-Shepherd-Puppy-Fetch.jpg'

export default function Kuehlautomat() {
  return (
    <div
      style={{
        backgroundColor: 'lightgrey',
        backgroundImage: 'none',
        width: '95%',
        justifyContent: 'center',
        fontFamily: 'Helvetica Neue, Helvetica, Liberation Sans, Arial, sans-serif'
      }}
    >
      <div
        style={{
          display: 'flex'
        }}
      >
        <div className="float-box box-left text-black">
          <small>Segelfliegerdamm 15/27</small>
          <br />
          <small>Berlin-Johannisthal</small>
          <br />
          <small>1197</small>
        </div>
        <div
          className="float-box-center"
          style={{
            flexGrow: '2'
          }}
        >
          <h1 className="text-black">
            <strong>VEB KÜHLAUTOMAT BERLIN</strong>
          </h1>
          <h5 className="text-black">BETRIEB DER AUSGEZEICHNETEN QUALITÄTSARBEIT</h5>
          <h5 className="text-black">TRÄGER DES BANNERS "HELD DER ARBEIT"</h5>
        </div>
        <div className="float-box box-right">
          <img src={KAB_1955} alt="KAB-Berlin" style={{ display: 'flex', width: '100%' }} />
        </div>
      </div>

      <div style={{ marginTop: '40px', display: 'inline-block'}}>
        <div className="prod-text" >
          <h6>Kühlautomaten Haushalt</h6>
        </div>
        <div className="prod-text">
          <h6>Kühlautomaten Gewerbe</h6>
        </div>
        <div className="prod-text">
          <h6>Kompressoren Schiffbau</h6>
        </div>
        <div className="prod-text">
          <h6>Großdieselmotoren</h6>
        </div>
        <div className="prod-text">
          <h6>Konsumgüterproduktion</h6>
        </div>
      </div>

      

      <div style={{ marginTop: '40px', display: 'flex' }}>
      <div className="float-box box-left text-black">
          <img src={Dog1} alt="Hund eins" style={{ display: 'flex', width: '100%' }} />
        </div>
        <div className="float-box box-right text-black">
          <hr />
        </div>
      </div>
    </div>
  )
}
