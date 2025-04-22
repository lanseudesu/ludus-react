import eel

eel.init('dist')  
@eel.expose
def say_hello(name):
    print(f"Hello from JS, {name}!")

eel.start('index.html', size=(800, 600))
