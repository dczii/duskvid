import React, { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {  NodePlayerView, NodeCameraView } from 'react-native-nodemediaclient';



export default function App(props){
  const [recording, setRecording] = useState(false);
  const [processing, setProcessing] = useState(false);

  let button = (<TouchableOpacity
      style={styles.button}
      onPress={async () => {
        this.vb.switchCamera();
        setRecording(true)
        this.vb.start();
        setProcessing(true)
      }}
    >
      <Text style={{ fontSize: 14 }}> RECORD </Text>
    </TouchableOpacity>
  )

  if (recording) {
    button = <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.vb.stop();
        setRecording(false)
      }}
    >
      <Text style={{ fontSize: 14 }}> STOP </Text>
    </TouchableOpacity>
  }

  if (processing) {
    button = (
      <View>
        <ActivityIndicator animating size='large' />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <NodeCameraView 
        style={{ flex: 1, width: '100%' }}
        ref={(vb) => { this.vb = vb }}
        outputUrl = {"rtmp://duskmobile.net/live/danilo"}
        camera={{ cameraId: 1, cameraFrontMirror: false }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
        autopreview={true}
      />
      <Text style={styles.welcome}>Dusk Mobile!</Text>
      <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center", padding: 20 }}
      >
        {button}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.5)'
  }
});
