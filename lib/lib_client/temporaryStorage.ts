// Импорт библиотек для хранения
// import LocalStorage from './LocalStorage'; // Пример другой библиотеки
import SessionStorage from './sessionStorage';

// Тип результата операций TemporaryStorage
export type TemporaryStorageResultType<T> = {
	success: boolean; // Указывает на успешность операции
	error: Error | null; // Ошибка, если операция завершилась неудачей
	data: T; // Данные, связанные с операцией
	key: string | null; // Ключ записи
};

// Интерфейс для библиотеки хранения данных
export interface StorageLibrary {
	createRecord<T = unknown>(
		key: string,
		value: T
	): TemporaryStorageResultType<T>;
	readRecord<T = unknown>(
		key: string
	): TemporaryStorageResultType<T | undefined>;
	updateRecord<T = unknown>(
		key: string,
		value: T
	): TemporaryStorageResultType<T>;
	deleteRecord<T = unknown>(
		key: string
	): TemporaryStorageResultType<T | undefined>;
	deleteAllRecords<T = unknown>(): TemporaryStorageResultType<T | null>;
}

// Константа по умолчанию — SessionStorage
const DEFAULT_STORAGE: StorageLibrary = SessionStorage;

// Функции для временного хранилища
export const createRecord = <T = unknown>(
	key: string,
	value: T,
	storage: StorageLibrary = DEFAULT_STORAGE
): TemporaryStorageResultType<T> => {
	return storage.createRecord(key, value);
};

export const readRecord = <T = unknown>(
	key: string,
	storage: StorageLibrary = DEFAULT_STORAGE
): TemporaryStorageResultType<T | undefined> => {
	return storage.readRecord(key);
};

export const updateRecord = <T = unknown>(
	key: string,
	value: T,
	storage: StorageLibrary = DEFAULT_STORAGE
): TemporaryStorageResultType<T> => {
	return storage.updateRecord(key, value);
};

export const deleteRecord = <T = unknown>(
	key: string,
	storage: StorageLibrary = DEFAULT_STORAGE
): TemporaryStorageResultType<T | undefined> => {
	return storage.deleteRecord(key);
};

export const deleteAllRecords = <T = unknown>(
	storage: StorageLibrary = DEFAULT_STORAGE
): TemporaryStorageResultType<T | null> => {
	return storage.deleteAllRecords();
};

// Экспортируемый объект
const ts = {
	createRecord,
	readRecord,
	updateRecord,
	deleteRecord,
	deleteAllRecords,
};

export default ts;
