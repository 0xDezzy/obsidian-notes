---
created: 2021-10-25T03:26:52-05:00
updated: 2021-10-25T03:56:32-05:00
---
# Download and Install
## Table of Contents
```toc
 style: number
 min_depth: 3
 max_depth: 6
```

Download and install Go quickly with the steps described here.

For other content on installing, you might be interested in:

-   [Managing Go installations](https://golang.org/doc/manage-install) -- How to install multiple versions and uninstall.
-   [Installing Go from source](https://golang.org/doc/install/source) -- How to check out the sources, build them on your own machine, and run them.

### Go Download
Click the button below to download the Go installer.
```button
name Download Go for Linux
type link
action https://golang.org/dl/go1.17.2.linux-amd64.tar.gz
class go-download
```

Try one of the [other downloads](https://golang.org/dl/).

**Note:** By default, the `go` command downloads and authenticates modules using the Go module mirror and Go checksum database run by Google. [Learn more.](https://golang.org/dl)

### Go install
```ad-linux
1.  Extract the archive you downloaded into /usr/local, creating a Go tree in /usr/local/go.
    
    **Important:** This step will remove a previous installation at /usr/local/go, if any, prior to extracting. Please back up any data before proceeding.
    
    For example, run the following as root or through `sudo`:
    
    `rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.2.linux-amd64.tar.gz`
    
2.  Add /usr/local/go/bin to the `PATH` environment variable.
    
    You can do this by adding the following line to your $HOME/.profile or /etc/profile (for a system-wide installation):
    
    `export PATH=$PATH:/usr/local/go/bin`
    
    **Note:** Changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as `source $HOME/.profile`.
    
3.  Verify that you've installed Go by opening a command prompt and typing the following command:
    
    ``$ go version`
    
4.  Confirm that the command prints the installed version of Go.
```

```ad-mac
1.  Open the package file you downloaded and follow the prompts to install Go.
    
    The package installs the Go distribution to /usr/local/go. The package should put the /usr/local/go/bin directory in your `PATH` environment variable. You may need to restart any open Terminal sessions for the change to take effect.
    
2.  Verify that you've installed Go by opening a command prompt and typing the following command:
    
    $ go version
    
3.  Confirm that the command prints the installed version of Go.
```

```ad-windows
1.  Open the MSI file you downloaded and follow the prompts to install Go.
    
    By default, the installer will install Go to `Program Files` or `Program Files (x86)`. You can change the location as needed. After installing, you will need to close and reopen any open command prompts so that changes to the environment made by the installer are reflected at the command prompt.
    
2.  Verify that you've installed Go.
    1.  In **Windows**, click the **Start** menu.
    2.  In the menu's search box, type `cmd`, then press the **Enter** key.
    3.  In the Command Prompt window that appears, type the following command:
        
        $ go version
        
    4.  Confirm that the command prints the installed version of Go.
```

### Go Code
You're set up! Visit the [Getting Started tutorial](https://golang.org/doc/tutorial/getting-started.html) to write some simple Go code. It takes about 10 minutes to complete.