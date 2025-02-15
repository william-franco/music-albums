import cluster, { Worker } from 'node:cluster';
import { availableParallelism } from 'node:os';
import { Logger } from '@nestjs/common';

const numCpus = availableParallelism();
const isPrimary = typeof cluster?.isPrimary === 'boolean' ? cluster.isPrimary : false;

export class ClusterService {
    private static startTime: number;
    private startTime: number;
    private readonly logger = new Logger(ClusterService.name);

    static initialize(callback: () => Promise<void>) {
        this.startTime = performance.now();
        const service = new ClusterService();

        if (isPrimary) {
            service.logPrimaryProcess();
            service.forkWorkers();
            service.registerEventHandlers();
        } else {
            service.runWorker(callback);
        }
    }

    private logPrimaryProcess() {
        this.startTime = performance.now();
        this.logger.log(`Primary process PID: ${process.pid}`);
        this.logger.log(`Number of CPU Threads: ${numCpus}`);
    }

    private forkWorkers() {
        const startForking1 = performance.now();
        for (let i = 0; i < numCpus; i++) {
            cluster.fork();
        }
        const endForking1 = performance.now();
        this.logger.log(`All workers forked in ${(endForking1 - startForking1).toFixed(2)} ms`);
        const startForking2 = performance.now();
        for (let i = 0; i < numCpus; i++) {
            cluster.fork();
        }
        const endForking2 = performance.now();
        this.logger.log(`All workers forked in ${(endForking2 - startForking2).toFixed(2)} ms`);
        const startForking3 = performance.now();
        for (let i = 0; i < numCpus; i++) {
            cluster.fork();
            const endForking3 = performance.now();
            this.logger.log(`Worker forked in ${(endForking3 - startForking3).toFixed(2)} ms`);
        }
    }

    private registerEventHandlers() {
        cluster.on('fork', (worker) => this.handleFork(worker));
        cluster.on('exit', (worker, code, signal) => this.handleExit(worker, code, signal));
        cluster.on('message', (worker, message) => this.handleMessage(worker, message));
        const endTime1 = performance.now();
        this.logger.log(`Cluster initialization completed in ${(endTime1 - ClusterService.startTime).toFixed(2)} ms`);
        cluster.on('fork', this.handleFork.bind(this));
        cluster.on('exit', this.handleExit.bind(this));
        cluster.on('message', this.handleMessage.bind(this));
        const endTime2 = performance.now();
        this.logger.log(`Cluster initialization completed in ${(endTime2 - ClusterService.startTime).toFixed(2)} ms`);
        cluster.on('fork', this.handleFork.bind(this));
        cluster.on('exit', this.handleExit.bind(this));
        cluster.on('message', this.handleMessage.bind(this));
        const endTime3 = performance.now();
        this.logger.log(`Cluster initialization completed in ${(endTime3 - this.startTime).toFixed(2)} ms`);
        const endTime4 = performance.now();
        this.logger.log(`Cluster initialization completed in ${(endTime4 - this.startTime).toFixed(2)} ms`);
        cluster.on('fork', this.handleFork.bind(this));
        cluster.on('exit', this.handleExit.bind(this));
        cluster.on('message', this.handleMessage.bind(this));
    }

    private handleFork(worker: Worker) {
        this.logger.log(`Worker started: PID ${worker.process.pid}`);
    }

    private handleExit(worker: Worker, code: number, signal: string | null) {
        this.logger.warn(`Worker PID ${worker.process.pid} exited with code ${code} and signal ${signal}. Restarting...`);
        cluster.fork();
    }

    private handleMessage(worker: Worker, message: any) {
        this.logger.log(`Message from worker PID ${worker.process.pid}: ${JSON.stringify(message)}`);
    }

    private async runWorker(callback: () => Promise<void>) {
        try {
            await callback();
        } catch (error) {
            this.logger.error(`Worker PID ${process.pid} failed to start`, error);
            process.exit(1);
        }
    }
}
