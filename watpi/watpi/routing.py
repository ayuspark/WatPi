from channels.routing import route
from apps.gallery.consumers import ws_message, ws_connect

channel_routing = [
    route("websocket.connect", ws_connect),
    route("websocket.receive", ws_message),
]
