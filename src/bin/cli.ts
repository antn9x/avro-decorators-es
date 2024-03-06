#!/usr/bin/env node

import { runAvroDecorators } from "../internals/program.js";
runAvroDecorators(process.argv, process.exit, console)
