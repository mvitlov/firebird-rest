# HTTP REST server for Firebird Databases

A simple REST HTTP server that will parse FirebirdSQL query and return response in **JSON** format.

[![npm version](https://badge.fury.io/js/firebird-rest.svg)](https://badge.fury.io/js/firebird-rest)

## Installation

```
npm install -g firebird-rest
```

## Usage

```
Usage: firebird-rest [options]
```

## Flags

```
--port Port that app listens to (default: 4444)
--h    Firebird host (default: "localhost")
--p    Firebird port (default: 3050)
--db   Firebird database path (default:"")
--u    Firebird User (default: "SYSDBA")
--pw   User password (default: "masterkey")
--r    User role (default: null)
```

## Usage

### Port

This package is preconfigured to listen on **TCP port 4444**, however, you can specify any port you want with ``--port`` flag. If you do that, make sure you add that port to the list of accessible ports in firewall settings.  
For testing purposes you can use:

- [Postman](https://www.getpostman.com/)
- `curl` command from the console
- your browser by pointing it to:

```
http://localhost:<port>/?sql=<your sql query>
```

### Example

```
~ $ firebird --db /opt/firebird/examples/empbuild/employee.fdb
^Z
[1]+  Stopped firebird --db /opt/firebird/examples/empbuild/employee.fdb
~ $ bg
[1]+ firebird --db /opt/firebird/examples/empbuild/employee.fdb &
~ $ curl 'http://localhost:4444' -d sql='select * from country' -L
[{"COUNTRY":"USA","CURRENCY":"Dollar"},{"COUNTRY":"England","CURRENCY":"Pound"},{"COUNTRY":"Canada","CURRENCY":"CdnDlr"},{"COUNTRY":"Switzerland","CURRENCY":"SFranc"},{"COUNTRY":"Japan","CURRENCY":"Yen"},{"COUNTRY":"Italy","CURRENCY":"Lira"},{"COUNTRY":"France","CURRENCY":"FFranc"},{"COUNTRY":"Germany","CURRENCY":"D-Mark"},{"COUNTRY":"Australia","CURRENCY":"ADollar"},{"COUNTRY":"Hong Kong","CURRENCY":"HKDollar"},{"COUNTRY":"Netherlands","CURRENCY":"Guilder"},{"COUNTRY":"Belgium","CURRENCY":"BFranc"},{"COUNTRY":"Austria","CURRENCY":"Schilling"},{"COUNTRY":"Fiji","CURRENCY":"FDollar"}]
~ $ fg
firebird --db /opt/firebird/examples/empbuild/employee.fdb
^C
```

## Limitations

Charset for database connection is always **UTF-8**.
Node is unicode, no matter if your database is using another charset to store string or blob, Firebird will transliterate automatically.
This is why you should use Firebird 2.5 server at least.

### Firebird 3.0 Support

Firebird's new wire protocol is not supported yet, so for Firebird 3.0 you need to add the following in `firebird.conf`

```
AuthServer = Legacy_Auth
WireCrypt = Disabled
```

## License

[MIT](/LICENSE)
