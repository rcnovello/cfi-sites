module.exports = {
    apps : [
/*      {
        name: "app-nginx",
        //exec_mode: 'cluster',
        //instances: 2,
        script: "./server_nginx.js",
        log_date_format: 'DD/MM/YYYY HH:mm:ss.SSS',
        out_file: './logs/NodeOut.log', // Specify the log file for standard output
        error_file: './logs/NodeError.log', // Specify the log file for standard error
        merge_logs: true,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
                env_production: {
          NODE_ENV: "production",
        }
      },*/
      {
      name: "app-cfi",
      script: "./cfi/src/server.js",
      log_date_format: 'DD/MM/YYYY HH:mm:ss.SSS',
      out_file: './logs/NodeOut.log', // Specify the log file for standard output
      error_file: './logs/NodeError.log', // Specify the log file for standard error
      //merge_logs: true,
      //autorestart: true,
      //watch: false,
      //max_memory_restart: '1G',
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
        name: "app-rcn-dev",
        script: "./rcn-dev/src/server.js",
        log_date_format: 'DD/MM/YYYY HH:mm:ss.SSS',
        out_file: './logs/NodeOut.log', // Specify the log file for standard output
        error_file: './logs/NodeError.log', // Specify the log file for standard error
        merge_logs: true,
        //autorestart: true,
        //watch: false,
        //max_memory_restart: '1G',
        env_production: {
          NODE_ENV: "production",
        }
      }]
  }
