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

2. Install Android STudio

```bash
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1
```
http://developer.android.com/sdk/index.html#Other
Unpack the downloaded ZIP file into an appropriate location for your applications.
To launch Android Studio, navigate to the android-studio/bin/ directory in a terminal and execute studio.sh.

You may want to add android-studio/bin/ to your PATH environmental variable so that you can start Android Studio from any directory.

```
sudo npm install -g cordova
```

### Cordova + IONIC setup

```bash
chmod 755 setup_system.sh
sudo ./setup_system.sh
/opt/android-sdk/tools/android -> INSTALL 
```
