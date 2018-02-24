# Apache Directory Archive
This theme is inspired by [Apaxy](https://github.com/oupala/apaxy).

## Setup
1. Download or clone this repository. Copy the `theme` directory and paste it in the root of your own site.
2. Copy the `.htaccess` file and paste in the root too.
3. Upload your own files and directories to the root directory. They will now be indexed as rows in a table.

## Theme features
This theme is setup with Bootstrap's table classes and grid system, and has another few functionalities including:
* Fancybox for viewing images and PDF files in the browser.
* Breadcrumb navigation for easy navigation between directories.
* Search bar that makes all files and directories searchable. This search does not however scan for files inside the directories.
* Bootstrap CSS styles.
* **(OPTIONAL)** One way to restrict access to your archive is to use basic authentication for your domain. Use the following Apache configuration in your `.htaccess` file to enable this feature:
```
AuthType Basic
AuthName "Private domain"
AuthUserFile /etc/apache2/.htpasswd
Require valid-user
```

**Notice** that you will also need to create a `.htpasswd` file for the authentication to work. This file will contain a username and an encrypted password. Use [this tool](http://www.htaccesstools.com/htpasswd-generator) to generate an entry for the `.htpasswd` file and upload it to your server.
Finally, remember to change the `AuthUserFile` to the correct path for where `.htpasswd` is stored on your server. Whenever you access the domain, you should now be prompted with a login dialog.

## Screenshots
The following shows screenshots of the archive in use (I use it mostly for vacation photos, degree certificates, software etc.).
![Screenshot overview](Images/Screenshots/screenshot1.png)
![Screenshot Fancybox](Images/Screenshots/screenshot2.png)