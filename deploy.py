from subprocess import call
import sys, os, subprocess, time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import logging


class MyFileSystemEventHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if check_if_ignored(event.src_path):
            call(['rsync','-avzhe','ssh',event.src_path,'ubuntu@123.206.196.147:/home/ubuntu/sqtp%s'%event.src_path[1:]])


def check_if_ignored(target_file):
    list_of_ignored = ['idea', 'git', 'vscode', 'node_modules', '__','build']
    for each_ignored in list_of_ignored:
        if each_ignored in target_file:
            return False
    return True


if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    event_handler = MyFileSystemEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.start()
    observer.join()
