import { React, useState, useEffect } from "react";

const VolumeSlider = () => {
    const [volume, setVolume] = useState(0.5);
    const musicRef = React.useRef(null);

    return (
        <div>
        <label htmlFor='volume-slider'>Volume:</label>
        <input
          type='range'
          id='volume-slider'
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={ (e) => setVolume(parseFloat(e.target.value)) }
          style={{ marginTop: '1.2rem', marginLeft: '1rem', width: '200px'}}
        />
      </div>
    );
};

export default VolumeSlider;