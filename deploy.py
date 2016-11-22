from subprocess import call
call(['rsync','-avzhe','ssh','./src','ubuntu@123.206.196.147:/home/ubuntu/sqtp'])

call(['rsync','-avzhe','ssh','./package.json','ubuntu@123.206.196.147:/home/ubuntu/sqtp'])

