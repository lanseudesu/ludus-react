import eel

eel.init('dist')  # or 'build' if you renamed it
@eel.expose
def say_hello(name):
    print(f"Hello from JS, {name}!")

eel.start('index.html', size=(800, 600))
