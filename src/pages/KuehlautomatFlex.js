import React from 'react'
import KAB_1955 from '../images/KAB_1955.jpeg'
import Dog1 from '../images/German-Shepherd-Puppy-Fetch.jpg'

export default function KuehlautomatFlex() {
  return (
    <div
      className="container-fluid p-5"
      style={{
        padding: '15px',
        backgroundColor: 'lightgrey',
        fontFamily: 'Helvetica Neue, Helvetica, Liberation Sans, Arial, sans-serif'
      }}
    >
      <div className="row">
        <div className="col-sm text-black" style={{ padding: '10px', border: '2px solid black' }}>
          <small>Segelfliegerdamm 15/27</small>
          <br />
          <small>Berlin-Johannisthal</small>
          <br />
          <small>1197</small>
        </div>
        <div
          className="col-sm"
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
        <div className="col-sm">
          <img src={KAB_1955} alt="KAB-Berlin" style={{ padding: '10px', border: '2px solid black', width: '100%' }} />
        </div>
      </div>

      <div className="row">
        <div className="prod-text">
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

      <div className="row">
        <div className="col-8 text-black">
          <img src={Dog1} alt="Hund eins" style={{ padding: '10px', border: '2px solid black', width: 'auto' }} />
        </div>
        <div className="col-2 text-black">
          <small className="kab-text">
            Bitte kontaktieren Sie die die junge Gruppenratsvorsitzende, Frau Obst, für weitere Details.
          </small>
        </div>
      </div>
    </div>
  )
}
