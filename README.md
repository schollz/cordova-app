# cordova-app

## Setup

### Android studio setup

1. First install Java 7

```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java7-installer
sudo apt-get install oracle-java7-set-default
```

And check if its installed using ```javac --version```.

2. Install Android Studio

First install some dependencies for Ubuntu (or wait until install fails to install...)_

```bash
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1
```

[Click here](http://developer.android.com/sdk/index.html#Other) to download the latest Android Studio package. Unpack the downloaded ZIP file into an appropriate location for your applications.

Add this to your ```.profile```:

```bash
export PATH=$PATH:/path/to/android-studio/bin # where you unzipped the package
export ANDROID_HOME=/home/XXX/Android/Sdk
source ~/.profile
```

Start Android studio

```bash
studio.sh
```

3. Enable a emulator (optional)

```
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
```

Restart computer, hit <DEL> and enable Virtualization.

Start Android Studio and then use ```Tools -> Android -> AVD Manager```. Setup an Android using Lollipop x86.

4. Install Cordova

```
sudo npm install -g cordova
```

4. Run cordova

```bash
cordova create hello com.example.hello HelloWorld
cd hello
cordova platform add android
cordova build android
cordova emulate android       #to deploy the app on a default android emulator
cordova run android --device  #to deploy the app on a connected device
```


